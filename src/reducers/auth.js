import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';

const asyncActionType = type => ({
	PENDING: `auth/${type}_PENDING`,
	SUCCESS: `auth/${type}_SUCCESS`,
	ERROR: `auth/${type}_ERROR`
});

const REGISTERATION = asyncActionType('REGISTERATION');
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
 * Action Creator : Registeration
 **************************/

export function registerationRequest(data) {
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

function* RegisterationSaga(action) {
	try {
		const data = yield call(Api.signUp, action.payload);
		yield put(RegisterSuccess());
	} catch (e) {
		yield put(RegisterError(e));
	}
}

export const authSagas = [takeLatest(REGISTERATION.PENDING, RegisterationSaga)];

export default function(state = {}, action) {
	switch (action.type) {
		case REGISTERATION.PENDING:
			return {
				...state
			};
		case REGISTERATION.SUCCESS:
			return {
				...state
			};
		case REGISTERATION.ERROR:
			return {
				...state
			};
	}
}
