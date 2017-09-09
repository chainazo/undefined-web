import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';

const asyncActionType = type => ({
	PENDING: `auth/${type}_PENDING`,
	SUCCESS: `auth/${type}_SUCCESS`,
	ERROR: `auth/${type}_ERROR`
});
const REGISTERATION = asyncActionType('REGISTERATION');

//TODO: MAKE URL
const REGISTERATION_URL = 'https://';

/**************************
 * ADD MORE APIs as scaling auth
 **************************/

const Api = {
	signUp: data => {
		const body = {
			email: data.email,
			password: data.password,
			firstName: data.firstName,
			lastName: data.lastName
		};
		return axios.post(REGISTERATION_URL, body);
	}
};

/**************************
 * Action Creator : Registration
 **************************/

export function registrationRequest(data) {
	const { firstName, lastName, email, password } = data;
	return {
		type: REGISTERATION.PENDING,
		payload: {
			firstName,
			lastName,
			email,
			password
		}
	};
}

const RegisterSuccess = () => {
	return {
		type: REGISTERATION.SUCCESS
	};
};

const RegisterError = error => {
	return {
		type: REGISTERATION.ERROR,
		errorCode: error.code,
		errorMessage: error.message
	};
};

function* RegistrationSaga(action) {
	try {
		const data = yield call(Api.signUp, action.payload);
		yield put(RegisterSuccess());
	} catch (e) {
		yield put(RegisterError(e));
	}
}

export const authSagas = [takeLatest(REGISTERATION.PENDING, RegistrationSaga)];

const initialState = {
	signUpRequest: {
		status: 'INIT',
		errorCode: '',
		errorMessage: ''
	}
};

export default function(state = initialState, action) {
	switch (action.type) {
		case REGISTERATION.PENDING:
			return {
				...state,
				signUpRequest: {
					...state.signUpRequest,
					status: 'PENDING'
				}
			};
		case REGISTERATION.SUCCESS:
			return {
				...state,
				signUpRequest: {
					signUpRequest: {
						...state.signUpRequest,
						status: 'SUCCESS'
					}
				}
			};
		case REGISTERATION.ERROR:
			return {
				...state,
				signUpRequest: {
					...state.signUpRequest,
					errorCode: action.errorCode,
					errorMessage: action.errorMessage,
					status: 'ERROR'
				}
			};
		default:
			return state;
	}
}
