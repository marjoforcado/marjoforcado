type TProps = {
  children: JSX.Element;
};

const Layout = (props: TProps) => {
  const { children } = props;

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default Layout;
