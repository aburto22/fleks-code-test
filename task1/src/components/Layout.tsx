type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className="text-fleks-dark">
      <header>
        <h1 className="py-6 text-3xl font-bold text-center text-white bg-fleks-dark">
          Birthdays
        </h1>
      </header>
      {children}
    </div>
  );
}

export default Layout;
