export default function (state = {}, action) {
	switch (action.type) {
		case "ADD_DATA":
			return {
				...state,

				data: [...action.payload],
			}
		
		default:
			return state
	}
}
