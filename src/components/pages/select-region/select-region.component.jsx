import Card from "../../card/card.component"

const SelectRegion = () => {
  const title = "Select the region";
  const regions = ["africa", "americas", "asia", "europe", "oceania"];
  return (
    <Card
      logo
      bodyTitle={title}
      options={regions}
    />
  )
}

export default SelectRegion;