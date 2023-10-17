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

export type { stringDispatcher, RegisterRequest, LoginRequest };