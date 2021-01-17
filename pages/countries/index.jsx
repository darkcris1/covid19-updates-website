import SEO from '../../components/SEO'
import Countries from '../../components/sections/Countries'

const countries = ({ data }) => {
  return (
    <>
      <SEO
        title="COVID 19 Countries Updates "
        description="All covid updates anywhere in the countries"
        keywords="covid,updates,2020,2021"
      />
      <Countries data={data} />
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://coronavirus-19-api.herokuapp.com/countries')
  const data = await res.json()
  const sortedData =
    data && data.sort((a, b) => a.country.localeCompare(b.country))
  return {
    props: {
      data: sortedData,
    },
    revalidate: 1,
  }
}

export default countries
