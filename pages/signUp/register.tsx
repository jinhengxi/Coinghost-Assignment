import { useForm, SubmitHandler } from 'react-hook-form';
import MakeId from '../../components/register/MakeId';
import SignUpHead from '../../components/commons/SignUpHead';
import Registerinput from '../../components/register/Registerinput';

// interface FormValue {
// 	name: string
// 	nickname: string
//   	email: string
//   	password: string
//   	password_confirm: string
// }

export default function register() {
	// const { register, handleSubmit, watch, formState: { errors } } = useForm<FormValue>()

	// const onSubmitHandler: submitHandler<FormValue> = (data) => {
	// 	console.log(data)
	// }

	return (
		<SignUpHead>
			<MakeId />
			<Registerinput />
		</SignUpHead>
	);
}
