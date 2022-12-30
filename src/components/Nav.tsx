import { useNavigate } from "react-router";
import '../style/nav.scss'
import homeIcon from '../assets/home-icon.svg'


const Nav = () => {
	const navigate = useNavigate();

	const navPrize = () => {
		navigate('/prizePerYear')
	}
	const navCategory = () => {
		navigate("/winnersByCategory")
	}
	const navTotalWinners = () => {
		navigate('/totalWinners')
	}
  const navWinnersByGender = () => {
	navigate('/winnersByGender')
  }
  const navHome = () => {
	navigate('/')
  }

  return (
	<div className="head-bar">
	  <div className="icon-container" onClick={ navHome }>
		<img src={ homeIcon } alt="home" />
	  </div>
	  <nav className="nav">
		<button className="nav__btn" onClick={ navPrize }>
		  Prize per year
		</button>
		<button className="nav__btn" onClick={ navCategory }>
		  Winners by category and year
		</button>
		<button className="nav__btn" onClick={ navTotalWinners }>Total winners by category</button>
	<button className="nav__btn" onClick={ navWinnersByGender }>Winners by gender</button>
	  </nav>
	</div>
  );
}

export default Nav