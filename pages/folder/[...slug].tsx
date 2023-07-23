import { useRouter } from 'next/router'
import React from 'react'



function CurrentDir({slugs}:any) {
    return (
        <>
            {
                slugs.length > 0 && slugs.map((data: any) => <> / {data}</>)
            }
        </>
    )
}
export async function getServerSideProps({params}:any) {
    const slugs = params.slug
    return {
      props: {slugs}
    }
  }
export default CurrentDir