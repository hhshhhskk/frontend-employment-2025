import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">홈</Link>
          </li>
          <li>
            <Link href="/pokemon">포켓몬</Link>
          </li>
          <li>
            <Link href="/sign-in">로그인</Link>
          </li>
          <li>
            <Link href="/sign-up">회원가입</Link>
          </li>
          <li>
            <Link href="/admin">관리자</Link>
          </li>
          <li>
            <Link href="/admin/users">관리자(유저)</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
