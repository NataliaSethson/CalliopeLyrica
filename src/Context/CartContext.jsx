import { createContext } from "react";
import { useNavigate } from "react-router-dom";



export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }

    return (
        <CartContext.Provider value={{
            handleVolver
        }}>
            {children}
        </CartContext.Provider>
    )
}