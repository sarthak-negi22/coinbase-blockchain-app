import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: 'humfmn92',
    dataset: 'production',
    apiVersion: '2021-03-25',
    // apiVersion: '2022-11-02',
    // apiVersion: '2021-10-21',
    token: 'sklysaT3mMYQGoL552b5XztkefB363i6EzcyTffJaVihwz7LgYVNSC2Mt0KeWvL53lZCFnX0tVbbQL0kC0otSJgBJpqirJhkcG3LnJkK8IqRa8j8BnYArJWs7GuaFptAUHJBZSExIElf2idyuc0M5Z5lwu3PN9n1H8v0jNMSDTy6cKcKqcJ4',
    useCdn: false,
})