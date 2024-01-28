'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    if (data.password !== data.confirmPassword) {
      return alert('La contraseña no coincide');
    }

    const res = await fetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({
        username: data.username,
        email: data.email,
        password: data.password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (res.ok) {
      router.push('/auth/login');
    }

    console.log(res);
  });

  console.log(errors);

  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
      <form onSubmit={onSubmit} className="w-1/4">
        <h1 className="font-bold text-4xl mb-4 text-center">Registrate</h1>

        <label htmlFor="username" className="mb-2 block text-sm">
          Nombre de usuario:
        </label>

        <input
          placeholder="Username123"
          className="p-3 rounded block mb-2 w-full outline-none"
          type="text"
          {...register('username', {
            required: {
              value: true,
              message: 'Nombre de usuario es requerido',
            },
          })}
        />

        {errors.username && (
          <span className="text-red-500 text-xs">
            {errors.username.message}
          </span>
        )}

        <label htmlFor="email" className="mb-2 block text-sm">
          Correo Electronico:
        </label>

        <input
          placeholder="usuarionuevo@gmail.com"
          className="p-3 rounded block mb-2 w-full outline-none"
          type="email"
          {...register('email', {
            required: {
              value: true,
              message: 'El correo electronico es requerido',
            },
          })}
        />

        {errors.email && (
          <span className="text-red-500 text-xs">{errors.email.message}</span>
        )}

        <label htmlFor="password" className="mb-2 block text-sm">
          Contraseña:
        </label>

        <input
          placeholder="**********"
          className="p-3 rounded block mb-2 w-full outline-none"
          type="password"
          {...register('password', {
            required: {
              value: true,
              message: 'La contraseña es requerida',
            },
          })}
        />

        {errors.password && (
          <span className="text-red-500 text-xs">
            {errors.password.message}
          </span>
        )}

        <label htmlFor="confirmPassword" className="mb-2 block text-sm">
          Confirmar Contraseña:
        </label>

        <input
          placeholder="**********"
          className="p-3 rounded block mb-2 w-full outline-none"
          type="password"
          {...register('confirmPassword', {
            required: {
              value: true,
              message: 'Confirmar la contraseña es requerida',
            },
          })}
        />

        {errors.confirmPassword && (
          <span className="text-red-500 text-xs">
            {errors.confirmPassword.message}
          </span>
        )}

        <button className="w-full bg-blue-500 rounded-lg p-3 text-white mt-4">
          Registrar
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
