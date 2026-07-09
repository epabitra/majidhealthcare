import {
  FaUserFriends,
  FaProcedures,
  FaTint,
  FaShoePrints,
  FaBandAid,
  FaVials,
  FaAppleAlt,
  FaVideo,
  FaHeartbeat,
  FaStethoscope,
  FaClinicMedical,
  FaUserMd,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaStar,
  FaCheckCircle,
  FaShieldAlt,
  FaHandHoldingMedical,
  FaAward,
} from 'react-icons/fa';

export const iconMap = {
  FaUserFriends,
  FaProcedures,
  FaTint,
  FaShoePrints,
  FaBandAid,
  FaVials,
  FaAppleAlt,
  FaVideo,
  FaHeartbeat,
  FaStethoscope,
  FaClinicMedical,
  FaUserMd,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaStar,
  FaCheckCircle,
  FaShieldAlt,
  FaHandHoldingMedical,
  FaAward,
};

export default function resolveIcon(name) {
  return iconMap[name] || FaHeartbeat;
}
