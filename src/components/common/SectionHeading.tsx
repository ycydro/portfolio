type SectionHeadingProps = {
  text: string
}

const SectionHeading = ({ text }: SectionHeadingProps) => {
  return <div className="w-full font-bold lowercase md:text-[28px]">{text}</div>
}

export default SectionHeading
