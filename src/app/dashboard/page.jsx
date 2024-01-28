'use client';
import { signOut } from 'next-auth/react';

function DashboardPage() {
  return (
    <section className="h-[calc(100vh-7rem)] flex justify-center items-center">
      <h1 className="text-5xl font-bold">Dashboard</h1>
      <button onClick={() => signOut()} className="px-4 py-2 rounded-md mt-4">
        Cerrar Sesión
      </button>
    </section>
  );
}

export default DashboardPage;
