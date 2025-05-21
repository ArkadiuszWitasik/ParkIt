const toDate = (value: any): Date => (value?.toDate ? value.toDate() : value);

export { toDate };
