type stringDispatcher = React.Dispatch<React.SetStateAction<string>>

interface RegisterRequest {
    username: string;
    email: string;
    password: string;
}

interface LoginRequest {
    email: string;
    password: string;
}

export type { stringDispatcher, RegisterRequest, LoginRequest };