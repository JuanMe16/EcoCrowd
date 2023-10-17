//Type to evade boilerplate and giantic name types.
type stringDispatcher = React.Dispatch<React.SetStateAction<string>>

//Interface for register request.
interface RegisterRequest {
    username: string;
    email: string;
    password: string;
}

//Interface for login request.
interface LoginRequest {
    email: string;
    password: string;
}

//Interface for JWT Token Header.
interface JWTHeader {
    email: string;
    password: string;
    iat: number;
    exp: number;
}

export type { stringDispatcher, RegisterRequest, LoginRequest, JWTHeader };