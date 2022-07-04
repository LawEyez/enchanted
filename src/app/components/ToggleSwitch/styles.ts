import styled from "styled-components";

export const Switch = styled.div`
  position: relative;
  display: inline-block;
  width: 5rem;
  height: 2.6rem;
`

export const SwitchSlider = styled.span<{ toggle: boolean, onClick: React.MouseEventHandler<HTMLSpanElement> }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${props => props.theme.text};
  border-radius: 2rem;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    height: 2rem;
    width: 2rem;
    background: ${props => props.theme.bg};
    top: .25rem;
    left: .3rem;
    border-radius: 2rem;
    transition: .3s ease;
    transform: ${props => !props.toggle && `translateX(2.25rem)`};
  }

`