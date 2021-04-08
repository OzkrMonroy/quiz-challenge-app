import Card from "../../card/card.component"

const SelectRegion = () => {
  const title = "Select the region";
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  return (
    <Card
      logo
      bodyTitle={title}
      options={regions}
    />
  )
}

export default SelectRegion;