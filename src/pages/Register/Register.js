

import { useAuthentication } from '../../hooks/useAuthentication';
import styles from './Register.module.css';

import { useState, useEffect } from 'react';

const Register = () => {
    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ConfirmaSenha, setConfirmaSenha] = useState("");
    const [error, setError] = useState("");

    const { createUser, error: authError, loading } = useAuthentication()

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");

        const user = {
            displayName,
            email,
            password,

        };

        if (password !== ConfirmaSenha) {
            setError("As senhas precisam ser iguais!");
            return;
        }

        const res = await createUser(user);

    }

    useEffect(() => {

        if (authError) {

            setError(authError);

        }
    }, [authError])


    return (
        <div className={styles.register}>
            <h2>Cadastre-se para postar</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Nome:</span>
                    <input type="text" name="displayName" required placeholder="Nome de usuário" value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
                </label>
                <label>
                    <span>Email:</span>
                    <input type="email" name="email" required placeholder="Email do usuário" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    <span>Senha:</span>
                    <input type="password" name="senha" required placeholder="Digite uma senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <label>
                    <span>Confirmar Senha:</span>
                    <input type="password" name="ConfirmaSenha" required placeholder="Confirme sua senha" value={ConfirmaSenha} onChange={(e) => setConfirmaSenha(e.target.value)} />
                </label>
                {!loading && <button className="btn">Cadastrar</button>}
                {loading && (
                    <button className="btn" disabled>
                        Aguarde...
                    </button>
                )}
                {error && <p className="error">{error}</p>}
            </form>
        </div>

    )
}

export default Register