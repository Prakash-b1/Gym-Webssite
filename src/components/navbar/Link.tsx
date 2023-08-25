
import AnchorLink from 'react-anchor-link-smooth-scroll'

import { SelectedPage } from '@/shared/Types';
type Props = {
    page:string,
    selectedPage:SelectedPage,
    setSelectedPage:(value:SelectedPage)=>void
}

const Link = ({page,selectedPage,setSelectedPage}: Props) => {
    const lowerCase  = page.toLowerCase().replace(/ /g,"") as SelectedPage;
    console.log(selectedPage);
  return (
    <AnchorLink
    href={`#${lowerCase}`}
    className={`${selectedPage === lowerCase ? "text-primary-500":""} transition duration-500 hover:text-primary-300`}
    onClick={()=>(setSelectedPage(lowerCase))}
    >
       {page}
    </AnchorLink>
  )
}
export default Link;