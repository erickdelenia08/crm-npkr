import { getCustomers } from "@/actions/customer.action"
import { CustomerTable } from "@/components/tables/customer-table"

export const dynamic = "force-dynamic"

export default async function CustomersPage() {
    const customers = await getCustomers()

    const safeCustomers = customers.map(c => ({
        id: c.id,
        name: c.name,
        phone: c.phone,
        email: c.email,
        address: c.address,
        createdAt: c.createdAt,
        leads: c.leads.map(l => ({
            id: l.id,
            source: l.source,
            status: l.status,
            createdAt: l.createdAt,
            marketing: {
                name: l.marketing.name
            },
            productType: {
                name: l.productType.name
            }
        }))
    }))

    return <CustomerTable initialCustomers={safeCustomers as any} />
}