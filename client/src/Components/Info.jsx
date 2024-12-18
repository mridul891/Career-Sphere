
const Info = ({title , information}) => {
  return (
    <div>
    <h1 className="text-3xl font-bold">{title}</h1>
    <p className="mt-2 text-lg text-gray-300">
      {information}
    </p>
  </div>
  )
}

export default Info