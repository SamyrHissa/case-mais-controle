import Logo from "../image/LogoMaisControle.png"
import { HeaderContainer } from './Styles'

export const Header = () => {
    return (
        <HeaderContainer>
            <img src={Logo} alt="Logo" />
        </HeaderContainer>
    )
}