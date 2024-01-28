const { NextResponse } = require('next/server');

import db from '@/libs/db';
import bcrypt from 'bcrypt';

export async function POST(request) {
  try {
    const data = await request.json();

    console.log(data);

    const userFound = await db.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (userFound) {
      return NextResponse.json(
        {
          message: 'El Correo electronico ya existe',
        },
        {
          status: 400,
        }
      );
    }
    const usernameFound = await db.user.findUnique({
      where: {
        username: data.username,
      },
    });

    if (usernameFound) {
      return NextResponse.json(
        {
          message: 'El Usuario ya existe',
        },
        {
          status: 400,
        }
      );
    }

    const hashesPassword = (data.password = await bcrypt.hash(
      data.password,
      10
    ));
    const newUser = await db.user.create({
      data: {
        username: data.username,
        email: data.email,
        password: hashesPassword,
      },
    });

    const { password: _, ...user } = newUser;

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
