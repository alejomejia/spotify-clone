import IconButton from 'components/IconButton/IconButton'

import HeaderLoggedIn from './LoggedIn/LoggedIn'
import HeaderLoggedOut from './LoggedOut/LoggedOut'

import theme from 'utils/styled/theme'

import * as S from './Header.styles'

export interface HeaderProps {
  isUserAuth: boolean
}

const Header = ({ isUserAuth }: HeaderProps) => {
  return (
    <S.HeaderWrapper>
      <S.Container>
        <S.ButtonsWrapper>
          <IconButton
            iconName="angleLeft"
            iconSize={22}
            padding={5}
            buttonColor={theme.color.white}
            buttonBackground={theme.color.black}
            buttonRadius={60}
            isDisabled
            onClick={() => alert('Go Prev')}
          />
          <IconButton
            iconName="angleRight"
            iconSize={22}
            padding={5}
            buttonColor={theme.color.white}
            buttonBackground={theme.color.black}
            buttonRadius={60}
            onClick={() => alert('Go Next')}
          />
        </S.ButtonsWrapper>
        <S.LoginWrapper>
          {isUserAuth ? <HeaderLoggedIn /> : <HeaderLoggedOut />}
        </S.LoginWrapper>
      </S.Container>
    </S.HeaderWrapper>
  )
}

export default Header
