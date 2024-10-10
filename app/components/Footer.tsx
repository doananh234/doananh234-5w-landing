export default function Footer() {
  return (
    <div className="flex xs:text-[8px] text-[8px] lg:text-xs opacity-70 justify-center gap-2 items-center">
      <a className="cursor-pointer" href="/privacy-policy">
        Privacy & Policy
      </a>
      <span>|</span>
      <a className="cursor-pointer " href="/terms-of-use">
        Terms of Use
      </a>
      <span>|</span>
      <a className="cursor-pointer " href="/contact-us">
        Contact Us
      </a>
    </div>
  )
}
