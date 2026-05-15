import { RiPhoneLine, RiWhatsappLine } from '@remixicon/react';
import Link from 'next/link';
import ThemeSwitch from '../ThemeSwitch';

const navigation = {
  navegacao: [
    { name: 'Início', href: '#' },
    { name: 'Nossas Kitnets', href: '/#nossas-kitnets' },
    { name: 'A Região', href: '/#regiao' },
  ],
};

export default function Footer() {
  return (
    <footer id="footer">
      <div className="lg:mx-[8rem] w-full lg:w-[90%] px-4 pb-8 pt-10 sm:pt-24 lg:pt-32">
        <div className="xl:grid xl:grid-cols-2 xl:gap-20">
          <div className="">
            <div className="flex space-x-6 mb-8">
              <ThemeSwitch />
            </div>
            <p className="mb-8 text-sm leading-6 text-gray-600 dark:text-gray-400">
              Somos especializados no aluguel de moradias estudantis e kitnets mobiliadas na região
              do Butantã, próximo à USP.
            </p>
          </div>

          <div className="grid grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50">
                Contato
              </h3>
              <ul role="list" className="mt-6 space-y-4" aria-label="Quick links Product">
                <li className="w-fit">
                  <span className="flex rounded-md text-sm text-gray-500 dark:text-gray-400 gap-2">
                    <RiPhoneLine
                      aria-hidden="true"
                      size={20}
                      className="text-gray-600 dark:text-gray-600"
                    />
                    <span>(11) 97362-3344</span>
                  </span>
                </li>
                <li className="w-fit">
                  <a
                    className="flex rounded-md text-sm text-gray-500 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 gap-2"
                    href="https://api.whatsapp.com/send?phone=5511944531303&text=Olá!%20Encontrei%20o%20anúncio%20no%20KitUsp%20e%20tenho%20interesse%20nas%20kitnets."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <RiWhatsappLine
                      aria-hidden="true"
                      size={20}
                      className="text-green-700 dark:text-green-400"
                    />
                    <span>(11) 94453-1303</span>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50">
                Navegação
              </h3>
              <ul role="list" className="mt-6 space-y-4" aria-label="Quick links Resources">
                {navigation.navegacao.map((item) => (
                  <li key={item.name} className="w-fit">
                    <Link
                      className="flex rounded-md text-sm text-gray-500 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                      href={item.href}
                    >
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 w-[90%] flex flex-col items-center justify-between gap-2 border-t border-gray-200 pt-8 sm:mt-16 sm:flex-row lg:mt-24 dark:border-gray-800">
          <p className="text-sm leading-5 text-gray-500 dark:text-gray-400">
            &copy; 2025 Desenvolvido por Iati Tech Software
          </p>
        </div>
      </div>
    </footer>
  );
}
