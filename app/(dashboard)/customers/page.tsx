import { getCustomers } from "@/actions/customer.action"
import { CustomerTable } from "@/components/tables/customer-table"

export const dynamic = "force-dynamic"

export default async function CustomersPage() {
    const customers = await getCustomers()
    return <CustomerTable initialCustomers={customers} />
}