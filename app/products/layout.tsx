import NavBar from "@/components/Layout/NavBar"
import { Container } from "@mui/material"

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
  <section>
    <NavBar/>
    <Container maxWidth="xl">
      {children}
    </Container>
  </section>)
}