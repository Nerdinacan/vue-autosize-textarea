import autosize from 'autosize';

export const AutosizeTextarea = {

	props: ['value'],

	template: `<textarea v-model="currentValue" @input="updateValue($event.target.value)"></textarea>`,

	computed: {
		currentValue() {
			return this.value;
		}
	},

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
