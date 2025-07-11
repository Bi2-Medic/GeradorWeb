import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import { Home, Pedido, Produto, Tuss, Cage, Pacote, Regra } from "./pages";
import styles from './styles/Menu.module.css'
import { GiHealthNormal} from 'react-icons/gi';

function App() {

    return (
        <div>
            <Router>
                <div className={styles.menu}>
                    <GiHealthNormal className={styles.icon} size={51}/>
                    <h1>Pedidos digital</h1>
                    <ul className={styles.nav}>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? styles.ativo : undefined} to="/" end>Home</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? styles.ativo : undefined} to="/pedido">Pedidos</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? styles.ativo : undefined} to="/produto">Produtos</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? styles.ativo : undefined} to="/tuss">Tuss</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? styles.ativo : undefined} to="/cage">Cages</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? styles.ativo : undefined} to="/pacote">Pacotes</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? styles.ativo : undefined} to="/regra">Regras padrão</NavLink>
                        </li>
                    </ul>
                </div>

                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/pedido" element={<Pedido />}></Route>
                    <Route path="/produto" element={<Produto />}></Route>
                    <Route path="/tuss" element={<Tuss />}></Route>
                    <Route path="/cage" element={<Cage />}></Route>
                    <Route path="/pacote" element={<Pacote />}></Route>
                    <Route path="/regra" element={<Regra />}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;