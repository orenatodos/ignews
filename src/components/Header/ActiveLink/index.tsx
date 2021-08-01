import { useRouter } from 'next/router'
import Link, { LinkProps } from 'next/link'
import { cloneElement, ReactElement } from 'react'

type ActiveLinkProps = {
  children: ReactElement
} & LinkProps

const ActiveLink = ({ children, href, ...props }: ActiveLinkProps) => {
  const { asPath } = useRouter()

  const active = href === asPath

  return (
    <Link href={href} {...props}>
      {cloneElement(children, { active })}
    </Link>
  )
}

export default ActiveLink
