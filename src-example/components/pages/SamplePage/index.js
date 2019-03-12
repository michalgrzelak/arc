import React from 'react'
import { connect } from 'react-refetch'

import {
  PageTemplate, Header, Footer, Paragraph, Heading,
} from 'components'
import { apiPrefix } from '../../../config'

const SamplePage = ({superHeroFetch}) => {
  console.log(superHeroFetch)
  if (!superHeroFetch.fulfilled) return null
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <Heading>Irure mollit aute tempor incididunt eiusmod fugiat tempor aute ex sit aute est proident est.</Heading>
      <Paragraph>
        Do cillum nulla consectetur excepteur aliquip adipisicing ipsum. Consectetur voluptate cillum cillum fugiat adipisicing eiusmod incididunt ut voluptate do aliquip ad irure occaecat cupidatat quis. Laborum laborum id quis officia anim quis in anim eu et aliquip sunt do excepteur. Consectetur ullamco sint do do nostrud tempor labore laboris sit fugiat veniam reprehenderit.
      </Paragraph>
      <Paragraph>
        {superHeroFetch.value.name}
      </Paragraph>
    </PageTemplate>
  )
}

const withSuperHero = connect(props => ({
  superHeroFetch: `https://www.superheroapi.com/api/10205265819442398/70`,
}))

export default withSuperHero(SamplePage)
