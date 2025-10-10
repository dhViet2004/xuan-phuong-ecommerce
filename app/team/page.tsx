"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const members = [
  { name: "Ngô Hồng Dũng", id: "23031422" },
  { name: "Nguyễn Tường Khanh", id: "23031515" },
  { name: "Nguyễn Vũ Nhật Hào", id: "23030440" },
  { name: "Nguyễn Thảo Vy", id: "23031419" },
  { name: "Nguyễn Thanh Xuân", id: "23031251" },
  { name: "Nguyễn Đoàn Gia Phú", id: "23030032" },
  { name: "Đặng Thị Kim Thuyên", id: "23031182" },
  { name: "Trần Thị Mỹ Uyên", id: "23030454" },
  { name: "Tướng Thành Hiệp", id: "23031266" },
]

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">Nhóm 7</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
                Thành viên thực hiện <span className="text-primary">Website Xuân Phương</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
                Chúng tôi là những sinh viên đam mê công nghệ, cùng nhau xây dựng website phục vụ ngành cơ khí và sản xuất công nghiệp.
              </p>
            </div>
          </div>
        </section>

        {/* Team Members Cards */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {members.map((member, idx) => (
                <Card key={member.id} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <span className={`text-2xl font-bold ${idx === 0 ? "text-red-600" : "text-primary"}`}>{member.name.split(" ").slice(-1)[0][0]}</span>
                    </div>
                    <CardTitle className={idx === 0 ? "text-red-600" : ""}>{member.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold mb-2">MSSV: {member.id}</p>
                    {idx === 0 && <p className="text-sm text-muted-foreground">Nhóm trưởng</p>}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-3xl font-bold mb-4 text-balance">Về nhóm 7</h2>
            <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
              Website được phát triển bởi các thành viên nhóm 7, DIGITAL MARKETING, BARIA VUNGTAU UNIVERSITY. Chúng tôi mong muốn mang đến giải pháp số hóa cho ngành cơ khí Việt Nam.
            </p>
            <p className="text-lg text-primary font-semibold">Cảm ơn bạn đã ghé thăm website của chúng tôi!</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
