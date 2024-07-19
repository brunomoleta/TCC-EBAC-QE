import "dotenv/config";
const token = process.env.API_TOKEN;

export const errorMessage = 'Sem permissão para listar recursos.'
export const scenarios = [
    {
        name: 'Quando é feita uma requisição sem token de autenticação',
        auth: false,
        errorCode: 401,
    },
    {
        name: 'Quando é feita uma requisição com token autenticado porém sem autorização',
        auth: `${token}asdas`,
        errorCode: 401,
    },
];
