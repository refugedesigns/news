import Link from "next/link";

const NavigationItem = (props) => {
  return (
    <nav>
      <ul>
        <li>
          <Link href={props.href}>
            <a className="tracking-wide text-white font-semibold lg:text-lg active:text-yellow-500 hover:text-yellow-500">
              {props.children}
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationItem;
