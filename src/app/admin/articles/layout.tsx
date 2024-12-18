export default function ReadArticleLayout({children } : {children: React.ReactNode}) {
  
    return (
        <main className="w-full h-full p-6 min-h-screen flex items-center justify-center" >
            {children}
        </main>
    );

}