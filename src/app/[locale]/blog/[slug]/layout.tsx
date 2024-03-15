import 'katex/dist/katex.min.css'
export default function MdxLayout({ children }: { children: React.ReactNode }) {
    return <div style={{ color: 'blue' }}>
        {children}
    </div>
}