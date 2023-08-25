

type Props = {
    name:string,
    image:string,
    description?:string
}

const Class = ({name,image,description}: Props) => {
    const overlayStyles = `flex flex-col items-center justify-center h-[380px] w-[480px] p-5 z-30 absolute whitespace-normal bg-primary-500 text-white opacity-0 transition duration-500 hover:opacity-90`
  return (
    <li className="relative mx-5 h-[380px] w-[480px] inline-block">
        <div className={overlayStyles}>
          <p className=" text-2xl">
            {name}
          </p>
          <p className="mt-5">{description}</p>
        </div>
        <img src={image} alt="" />
    </li>
  )
}

export default Class