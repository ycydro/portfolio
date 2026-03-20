import SVGBase from "@/components/svgs/SVGBase"

const SupabaseIcon = ({ className }: { className?: string }) => {
  return (
    <SVGBase className={className}>
      <path d="M13.75 3.248v14.214H4.875c-.837 0-1.337-.981-.804-1.671L13.75 3.248Zm2.5 6.79V2.916c0-2.264-2.87-3.28-4.273-1.464L2.091 14.264c-1.783 2.311-.156 5.698 2.784 5.698h8.875v7.122c0 2.264 2.87 3.28 4.272 1.464l9.886-12.811c1.784-2.312.157-5.699-2.784-5.699H16.25Zm0 2.5h8.874c.837 0 1.337.981.805 1.671l-9.68 12.543V12.538Z" />
    </SVGBase>
  )
}

export default SupabaseIcon
