import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import React from 'react';

async function Navbar() {
  const session = await getServerSession(authOptions);
  // console.log(session);

  return (
    <nav className="flex justify-between items-center py-3 px-20">
      <Link href="/">
        <h1 className="text-xl font-bold">Pre-Parate</h1>
      </Link>
      <ul className="flex gap-x-4">
        {!session?.user ? (
          <>
            <li>
              <Link href="/auth/login">Iniciar Sesión</Link>
            </li>
            <li>
              <Link href="/auth/register">Registrate</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link href="/api/auth/signout">Cerrar Sesión</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
