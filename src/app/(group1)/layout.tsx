export default function Group1Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <span>Group1 레이아웃입니다.</span>
      <main>{children}</main>
    </div>
  );
}
