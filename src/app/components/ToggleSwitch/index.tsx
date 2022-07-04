import { Switch, SwitchSlider } from "./styles"

interface ToggleSwitchProps {
  toggle: boolean,
  toggleFunction: Function
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ toggle, toggleFunction }) => {
  return (
    <Switch>
      <SwitchSlider toggle={toggle} onClick={e => toggleFunction()} />  
    </Switch>
  )
}

export default ToggleSwitch
