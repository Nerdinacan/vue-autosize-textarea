import autosize from 'autosize';

export const AutosizeTextarea = {

	props: ['value'],

	template: `<textarea ref="textarea" @input="updateValue($event.target.value)">{{ value }}</textarea>`,

	methods: {
		updateValue(val) {
			autosize(this.$el);
			this.$emit('input', val);
		}
	},

	mounted() {
		autosize(this.$el)
	}

}
