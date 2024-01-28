'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

function LoginPage() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const router = useRouter();
  const [error, setError] = useState(null);

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    const res = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    console.log(res);

    if (res.error) {
      setError(res.error);
    } else {
      router.push('/dashboard');
      router.refresh();
    }
  });

  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
      <form onSubmit={onSubmit} className="w-1/4">
        {error && (
          <p className="bg-red-500 text-lg p-3 rounded mb-2">{error}</p>
        )}
        <h1 className="font-bold text-4xl mb-4 text-center">Iniciar Sesión</h1>
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

        <button className="w-full bg-blue-500 rounded-lg p-3 text-white mt-4">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
