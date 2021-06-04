import { useRouter } from 'next/router'
import Link from "next/link";


const NavigationItem = (props) => {
  const router = useRouter()
  return (
    <li>
      <Link activeClassName="text-gray-500" href={props.href}>
        <a
          className={`tracking-widest text-white font-semibold lg:text-lg hover:text-[#FF6A3D] ${router.pathname === props.href ? 'active': ''}`}
        >
          {props.children}
        </a>
      </Link>
    </li>
  );
};

export default NavigationItem;
