'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

// Define the verification fields required for each platform
const platformVerificationFields = {
  spotify: [
    { id: 'artistProfileLink', label: 'Spotify Artist Profile Link', type: 'url', placeholder: 'https://open.spotify.com/artist/...' },
    { id: 'spotifyArtistUrl', label: 'Spotify Artist URL', type: 'url', placeholder: 'https://spotify.com/artist/...' }
  ],
  appleMusic: [
    { id: 'appleMusicId', label: 'Apple Music Artist ID', type: 'text', placeholder: 'Your Apple Music Artist ID' },
    { id: 'appleMusicUrl', label: 'Apple Music Profile URL', type: 'url', placeholder: 'https://music.apple.com/artist/...' }
  ],
  tiktok: [
    { id: 'tiktokUsername', label: 'TikTok Username', type: 'text', placeholder: '@yourusername' },
    { id: 'artistName', label: 'Artist Name', type: 'text', placeholder: 'Your artist name as it appears on TikTok' }
  ],
  youtube: [
    { id: 'youtubeChannelId', label: 'YouTube Channel ID', type: 'text', placeholder: 'Your YouTube Channel ID' },
    { id: 'youtubeChannelUrl', label: 'YouTube Channel URL', type: 'url', placeholder: 'https://youtube.com/channel/...' }
  ],
  soundcloud: [
    { id: 'soundcloudUsername', label: 'SoundCloud Username', type: 'text', placeholder: 'Your SoundCloud username' },
    { id: 'soundcloudProfileUrl', label: 'SoundCloud Profile URL', type: 'url', placeholder: 'https://soundcloud.com/...' }
  ]
}

type Platform = keyof typeof platformVerificationFields

const MusicDistributionForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    artistName: '',
    streamoId: '',
    selectedPlatform: '' as Platform | '',
    verificationFields: {} as Record<string, string>
  })
  
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formError, setFormError] = useState('')
  const [formSuccess, setFormSuccess] = useState(false)
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    
    if (name === 'selectedPlatform') {
      // Reset verification fields when platform changes
      setFormData({
        ...formData,
        selectedPlatform: value as Platform,
        verificationFields: {}
      })
    } else if (name.startsWith('verification_')) {
      // Handle verification field changes
      const fieldName = name.replace('verification_', '')
      setFormData({
        ...formData,
        verificationFields: {
          ...formData.verificationFields,
          [fieldName]: value
        }
      })
    } else {
      // Handle regular field changes
      setFormData({
        ...formData,
        [name]: value
      })
    }
  }
  
  const validateStep1 = () => {
    if (!formData.fullName || !formData.email || !formData.phone || !formData.artistName) {
      setFormError('Please fill in all required fields')
      return false
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setFormError('Please enter a valid email address')
      return false
    }
    
    setFormError('')
    return true
  }
  
  const validateStep2 = () => {
    if (!formData.selectedPlatform) {
      setFormError('Please select a platform for verification')
      return false
    }
    
    if (!formData.streamoId) {
      setFormError('Please enter your Streamo ID')
      return false
    }
    
    // Check if all verification fields for the selected platform are filled
    const requiredFields = platformVerificationFields[formData.selectedPlatform as Platform]
    for (const field of requiredFields) {
      if (!formData.verificationFields[field.id]) {
        setFormError(`Please fill in the ${field.label} field`)
        return false
      }
    }
    
    setFormError('')
    return true
  }
  
  const handleNextStep = () => {
    if (step === 1 && validateStep1()) {
      setStep(2)
    }
  }
  
  const handlePrevStep = () => {
    setStep(1)
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (step === 2 && validateStep2()) {
      setIsSubmitting(true)
      setFormError('')
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))
        
        // Success
        setFormSuccess(true)
        setIsSubmitting(false)
      } catch (error) {
        setFormError('An error occurred while submitting your request. Please try again.')
        setIsSubmitting(false)
      }
    }
  }
  
  const renderVerificationFields = () => {
    if (!formData.selectedPlatform) return null
    
    const fields = platformVerificationFields[formData.selectedPlatform as Platform]
    
    return (
      <div className="space-y-4 mt-4">
        {fields.map(field => (
          <div key={field.id}>
            <label htmlFor={`verification_${field.id}`} className="block text-sm font-medium text-gray-300 mb-1">
              {field.label} <span className="text-green-500">*</span>
            </label>
            <input
              type={field.type}
              id={`verification_${field.id}`}
              name={`verification_${field.id}`}
              value={formData.verificationFields[field.id] || ''}
              onChange={handleInputChange}
              placeholder={field.placeholder}
              className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-500"
              required
            />
          </div>
        ))}
      </div>
    )
  }
  
  if (formSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center py-8"
      >
        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Request Submitted Successfully!</h3>
        <p className="text-gray-300 mb-6">
          Thank you for your submission. We'll review your verification details and get back to you within 24-48 hours.
        </p>
        <p className="text-gray-300 text-sm">
          A confirmation email has been sent to <span className="text-green-400">{formData.email}</span>
        </p>
        <button
          onClick={() => {
            setFormSuccess(false)
            setStep(1)
            setFormData({
              fullName: '',
              email: '',
              phone: '',
              artistName: '',
              streamoId: '',
              selectedPlatform: '',
              verificationFields: {}
            })
          }}
          className="mt-6 px-6 py-2 bg-green-500/20 hover:bg-green-500/30 text-green-500 rounded-lg transition-colors duration-300"
        >
          Submit Another Request
        </button>
      </motion.div>
    )
  }
  
  return (
    <div>
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-3">Ready to Go Global?</h3>
        <p className="text-gray-300">
          Submit your music once and we'll distribute it to 50+ platforms worldwide, including Spotify, Apple Music, TikTok, and more.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        {step === 1 ? (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-1">
                Full Name <span className="text-green-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Your full name"
                className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email Address <span className="text-green-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com"
                className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                Phone Number <span className="text-green-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Your phone number"
                className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="artistName" className="block text-sm font-medium text-gray-300 mb-1">
                Artist/Band Name <span className="text-green-500">*</span>
              </label>
              <input
                type="text"
                id="artistName"
                name="artistName"
                value={formData.artistName}
                onChange={handleInputChange}
                placeholder="Your artist or band name"
                className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-500"
                required
              />
            </div>
            
            {formError && (
              <div className="p-3 bg-red-500/20 border border-red-500/50 rounded-lg">
                <p className="text-red-400 text-sm">{formError}</p>
              </div>
            )}
            
            <div className="pt-4">
              <button
                type="button"
                onClick={handleNextStep}
                className="w-full py-3 px-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium rounded-lg transition-colors duration-300 flex items-center justify-center"
              >
                Continue to Verification
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <div>
              <label htmlFor="streamoId" className="block text-sm font-medium text-gray-300 mb-1">
                Streamo ID <span className="text-green-500">*</span>
              </label>
              <input
                type="text"
                id="streamoId"
                name="streamoId"
                value={formData.streamoId}
                onChange={handleInputChange}
                placeholder="Your Streamo ID (provided when you sent the request)"
                className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-500"
                required
              />
              <p className="text-xs text-gray-400 mt-1">
                Your Streamo ID is required for verification purposes
              </p>
            </div>
            
            <div>
              <label htmlFor="selectedPlatform" className="block text-sm font-medium text-gray-300 mb-1">
                Select Platform for Verification <span className="text-green-500">*</span>
              </label>
              <select
                id="selectedPlatform"
                name="selectedPlatform"
                value={formData.selectedPlatform}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white"
                required
              >
                <option value="">Select a platform</option>
                <option value="spotify">Spotify</option>
                <option value="appleMusic">Apple Music</option>
                <option value="tiktok">TikTok</option>
                <option value="youtube">YouTube</option>
                <option value="soundcloud">SoundCloud</option>
              </select>
              <p className="text-xs text-gray-400 mt-1">
                Choose the platform where you have an existing artist profile
              </p>
            </div>
            
            {renderVerificationFields()}
            
            {formError && (
              <div className="p-3 bg-red-500/20 border border-red-500/50 rounded-lg">
                <p className="text-red-400 text-sm">{formError}</p>
              </div>
            )}
            
            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={handlePrevStep}
                className="flex-1 py-3 px-4 bg-black/50 hover:bg-black/70 text-white font-medium rounded-lg transition-colors duration-300 flex items-center justify-center border border-gray-700"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                </svg>
                Back
              </button>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 py-3 px-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium rounded-lg transition-colors duration-300 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>
                    Submit Request
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </motion.div>
        )}
      </form>
      
      <div className="mt-8 pt-6 border-t border-gray-800">
        <h4 className="text-sm font-medium text-white mb-2">What happens next?</h4>
        <ol className="space-y-2 text-sm text-gray-400">
          <li className="flex items-start">
            <span className="flex-shrink-0 w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center mr-2 mt-0.5 text-xs text-green-500">1</span>
            <span>We'll review your submission and verify your artist identity</span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center mr-2 mt-0.5 text-xs text-green-500">2</span>
            <span>You'll receive a confirmation email with next steps</span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center mr-2 mt-0.5 text-xs text-green-500">3</span>
            <span>Upload your music through our secure distribution portal</span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center mr-2 mt-0.5 text-xs text-green-500">4</span>
            <span>Your music will be distributed to all 50+ major platforms at once</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default MusicDistributionForm
