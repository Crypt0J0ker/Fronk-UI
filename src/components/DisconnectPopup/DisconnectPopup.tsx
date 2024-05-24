import { useAuth } from '@/hook/useAuth'
import { useTranslation } from 'next-i18next'
import { useDisconnect } from 'wagmi'

const Popup = () => {
  const { t }: { t: any } = useTranslation()
  const { disconnect } = useDisconnect()
  const { setIsLoading, setIsOpenSidebar } = useAuth()

  function handleDisconnect() {
    setIsLoading(true)
    disconnect()
    setIsOpenSidebar(false)
  }
  return (
    <>
      <input type="checkbox" id="popup" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box text-black">
          <p className="py-4">{t('Are you sure you want to disconnect?')}</p>
          <div className="modal-action">
            <label htmlFor="popup" className="btn">
              {t('cancel')}
            </label>
            <label htmlFor="popup" onClick={handleDisconnect} className="btn">
              {t('disconnect')}
            </label>
          </div>
        </div>

        <label className="modal-backdrop" htmlFor="popup"></label>
      </div>
    </>
  )
}

export default Popup
