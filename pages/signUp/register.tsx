import MakeId from '../../components/register/MakeId';
import SignUpHead from '../../components/commons/SignUpHead';
import Register from '../../components/register/Register';


export default function register() {

	return (
		<SignUpHead>
			<MakeId />
			<Register />
		</SignUpHead>
	);
}
