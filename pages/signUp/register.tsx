
import MakeId from '../../components/register/MakeId';
import SignUpHead from '../../components/commons/SignUpHead';
import Registerinput from '../../components/register/Registerinput';


export default function register() {

	return (
		<SignUpHead>
			<MakeId />
			<Registerinput />
		</SignUpHead>
	);
}
